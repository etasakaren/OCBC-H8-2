from config import db, ma
from marshmallow import fields
from sqlalchemy.orm import sessionmaker, relationship

class Director(db.Model):
    __tablename__ = 'directors'
    director_id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String(255), nullable=False)
    gender = db.Column(db.Integer, nullable=False)
    director_uid = db.Column(db.Integer, nullable=False, unique=True)
    department = db.Column(db.String(255), nullable=False)
    movies = relationship("Movie", cascade="all,delete")


class Movie(db.Model):
    __tablename__ = 'movies'
    movie_id = db.Column(db.Integer, primary_key=True)
    original_title = db.Column(db.Text(), nullable=False)
    budget = db.Column(db.Integer, nullable=False)
    popularity = db.Column(db.Integer, nullable=False)
    release_date = db.Column(db.String(255), nullable=False)    
    revenue = db.Column(db.Integer, nullable=False)
    title = db.Column(db.Text(), nullable=False)
    vote_average = db.Column(db.REAL, nullable=False) 
    vote_count = db.Column(db.Integer, nullable=False)
    overview = db.Column(db.Text())
    tagline = db.Column(db.Text())    
    movie_uid = db.Column(db.Integer, nullable=False, unique=True)               
    director_id = db.Column(db.Integer, db.ForeignKey('directors.director_id'))
    director = relationship("Director")


class DirectorSchema(ma.SQLAlchemyAutoSchema):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    class Meta:
        model = Director
        sqla_session = db.session
        load_instance = True

    movies = fields.Nested('DirectorMovieSchema', default=[], many=True)


class DirectorMovieSchema(ma.SQLAlchemyAutoSchema):
    """
    This class exists to get around a recursion issue
    """

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    movie_id = fields.Int()
    original_title = fields.Str()
    budget = fields.Int()
    popularity = fields.Int()
    release_date = fields.Str()
    revenue = fields.Int()
    title = fields.Str()
    vote_average = fields.Float()
    vote_count = fields.Int()
    overview = fields.Str()
    tagline = fields.Str()
    movie_uid = fields.Int()
    director_id = fields.Int()


class MovieSchema(ma.SQLAlchemyAutoSchema):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    class Meta:
        model = Movie
        sqla_session = db.session
        load_instance = True

    director = fields.Nested("MovieDirectorSchema", default=None)


class MovieDirectorSchema(ma.SQLAlchemyAutoSchema):
    """
    This class exists to get around a recursion issue
    """

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    director_id = fields.Int()
    name = fields.Str()
    gender = fields.Int()
    director_uid = fields.Int()
    department = fields.Str()
