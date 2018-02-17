import bs4
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup

my_url = 'https://www.jumia.com.ng/phones-tablets/'

#Opening a connection, grabbing the page
uClient = uReq(my_url)

page_raw = uClient.read()

#closes the client
uClient.close()

#html parsing
page_soup = soup(page_raw, 'html.parser')

#check your data
print(page_soup.p)
