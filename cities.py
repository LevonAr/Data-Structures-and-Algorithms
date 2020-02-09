# -*- coding: utf-8 -*-
# scrapy runspider cities.py -o 6.json

import requests
import scrapy
from scrapy import Request

class JobsSpider(scrapy.Spider):
    name = "cities"
    allowed_domains = ["en.wikipedia.org"]
