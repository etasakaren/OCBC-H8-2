import unittest
from directors import *
from movies import *

class Test(unittest.TestCase):
    def test_get_director(self):
        self.assertEqual(Directors.read_one(4762), Directors.read_one(4762))

    def test_get_movie(self):
        self.assertEqual(Movies.read_one(4762,43597), Movies.read_one(4762,43597))
    

if __name__ == '__main__':
    unittest.main()
