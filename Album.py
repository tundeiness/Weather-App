class Album:

	"""this is an Album
	   sales record by 
	   different artiste
	   on ta music application.
	   it aims to get the 
	   artiste name and the ratings 
	   given by listeners so far.
	   For Each ratings recieved
	   a star is given. For example 
	   20 ratings equals 1 star,
	   40 ratings equals 2 stars
	   and so on"""

	   #initialisation aka constructor
	def __init__(self, name_of_album, artist, year, genre, rating):
		self.name_album = name_of_album # store name_of_album in a field called name_album
		self.artist = artist
		self.year = year
		self.genre = genre
		self.rating = rating


    def likes(self, rating):
		if (users.rating == 20):
  		return stars = 1
    
    def type(self):
	    return self.genre

	def name(self):
	    return self.artist

	def title(self):
	    return self.name_of_album



#  performer1 = Album()

		