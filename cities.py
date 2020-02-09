# -*- coding: utf-8 -*-
# scrapy runspider cities.py -o 6.json

import requests
import scrapy
from scrapy import Request

class JobsSpider(scrapy.Spider):
    name = "cities"
    allowed_domains = ["en.wikipedia.org"]
    start_urls = ["https://en.wikipedia.org/wiki/List_of_cities_in_Los_Angeles_County,_California"]

    def parse(self, response):
        cities = response.xpath('//div[@class="mw-parser-output"]/table/tbody/tr/td/a/text()').extract()
        yield {'cities': cities}

    r = requests.post('https://httpbin.org/post', data = {'key':'value'})
    print(r.text)
