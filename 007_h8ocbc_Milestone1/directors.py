"""
This is the directors module and supports all the REST actions for the
directors data
"""

from flask import make_response, abort
from config import db
from models import Director, DirectorSchema, Movie

class Directors:
    def read_all():
        """
        This function responds to a request for /api/directors
        with the complete lists of directors

        :return:        json string of list of directors
        """
        # Create the list of directors from our data
        directors = Director.query.order_by(Director.name).limit(50).all()

        # Serialize the data for the response
        director_schema = DirectorSchema(many=True)
        data = director_schema.dump(directors)
        return data


    def read_one(director_id):
        """
        This function responds to a request for /api/directors/{director_id}
        with one matching director from directors

        :param id:   Id of director to find
        :return:            director matching id
        """
        # Build the initial query
        director = (
            Director.query.filter(Director.director_id == director_id)
            .outerjoin(Movie)
            .one_or_none()
        )

        # Did we find a director?
        if director is not None:

            # Serialize the data for the response
            director_schema = DirectorSchema()
            data = director_schema.dump(director)
            return data

        # Otherwise, nope, didn't find that director
        else:
            abort(404, f"Director not found for Id: {director_id}")

    def read_one_uid(director_uid):
        """
        This function responds to a request for /api/directors/{director_uid}
        with one matching director uid from directors

        :param id:   Uid of director to find
        :return:            director matching uid
        """
        # Build the initial query
        director = (
            Director.query.filter(Director.director_uid == director_uid)
            .outerjoin(Movie)
            .one_or_none()
        )

        # Did we find a director?
        if director is not None:

            # Serialize the data for the response
            director_schema = DirectorSchema()
            data = director_schema.dump(director)
            return data

        # Otherwise, nope, didn't find that director
        else:
            abort(404, f"Director not found for Uid: {director_uid}")

    def read_one_name(name):
        """
        This function responds to a request for /api/directors/{name}
        with one matching director name from directors

        :param id:   Name of director to find
        :return:            director matching name
        """
        # Build the initial query
        director = (
            Director.query.filter(Director.name == name)
            .outerjoin(Movie)
            .one_or_none()
        )

        # Did we find a director?
        if director is not None:

            # Serialize the data for the response
            director_schema = DirectorSchema()
            data = director_schema.dump(director)
            return data

        # Otherwise, nope, didn't find that director
        else:
            abort(404, f"Director not found for name: {name}")

    def create(director):
        """
        This function creates a new director in the directors structure
        based on the passed in director data

        :param director:  director to create in directors structure
        :return:        201 on success, 406 on director exists
        """
        director_uid = director.get("director_uid")

        existing_uid = (
            Director.query.filter(Director.director_uid == director_uid)
            .one_or_none()
        )
        # Can we insert this director?
        if existing_uid is None:

            # Create a director instance using the schema and the passed in director
            schema = DirectorSchema()
            new_director = schema.load(director, session=db.session)

            # Add the director to the database
            db.session.add(new_director)
            db.session.commit()

            # Serialize and return the newly created director in the response
            data = schema.dump(new_director)

            return data, 201

        # Otherwise, nope, director exists already
        else:
            abort(409, f"Director with uid of {director_uid} exists already")


    def update(director_id, director):
        """
        This function updates an existing director in the directors structure

        :param id:   Id of the director to update in the directors structure
        :param director:      director to update
        :return:            updated director structure
        """
        # Get the director requested from the db into session
        director_uid = director.get("director_uid")

        existing_uid = (
            Director.query.filter(Director.director_uid == director_uid)
            .one_or_none()
        )
        
        update_director = Director.query.filter(
            Director.director_id == director_id
        ).one_or_none()

        # Did we find an existing director?
        if update_director is not None and existing_uid is not None:

            # turn the passed in director into a db object
            schema = DirectorSchema()
            update = schema.load(director, session=db.session)

            # Set the id to the director we want to update
            update.director_id = update_director.director_id
            update.director_uid = update_director.director_uid

            # merge the new object into the old and commit it to the db
            db.session.merge(update)
            db.session.commit()

            # return updated director in the response
            data = schema.dump(update_director)

            return data, 200

        # Otherwise, nope, didn't find that director
        else:
            abort(404, f"Director not found for Id: {director_id} or director uid is not allowed to be overwritten")


    def delete(director_id):
        """
        This function deletes a director from the directors structure

        :param id:   Id of the director to delete
        :return:            200 on successful delete, 404 if not found
        """
        # Get the director requested
        director = Director.query.filter(Director.director_id == director_id).one_or_none()

        # Did we find a director?
        if director is not None:
            db.session.delete(director)
            db.session.commit()
            return make_response(f"Director {director_id} deleted", 200)

        # Otherwise, nope, didn't find that director
        else:
            abort(404, f"Director not found for Id: {director_id}")