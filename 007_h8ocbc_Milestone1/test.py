import unittest
from directors import *
from movies import *
import config

connex_app = config.connex_app

# Read the swagger.yml file to configure the endpoints
connex_app.add_api("swagger.yml")

class Test(unittest.TestCase):
    '''
    Test whether read_one method has dict type
    '''
    def test_get_director(self):
        self.assertIs(type(Directors.read_one(4762)), dict)

    def test_get_movie(self):
        self.assertIs(type(Movies.read_one(4762,43597)), dict)
    '''
    Test whether read_all method has list type
    '''    
    def test_get_directors(self):
        self.assertIs(type(Directors.read_all()),list)

    def test_get_movies(self):
        self.assertIs(type(Movies.read_all()),list)

class MyTestCase(unittest.TestCase):
    '''
    Test client connexion
    '''
    def setUp(self):
        connex_app.app.testing = True
        self.connex_app = connex_app.app.test_client()
    '''
    Test whether route is success or not
    '''
    def test_directors(self):
        result = self.connex_app.get('/api/directors')
        self.assertEqual(result.status_code, 200)

    def test_movies(self):
        result = self.connex_app.get('/api/movies')
        self.assertEqual(result.status_code, 200)


if __name__ == '__main__':
    unittest.main()
