import requests
from bs4 import BeautifulSoup

URL = "https://www.google.com/maps/dir/

r = requests.get(URL)

parse = BeautifulSoup(r.content, "html.parser")
