class Employee:
	"""
	Setting up an Employee record
	database. User should be able 
	to fill in their bio-data before 
	it is stored safely somewhere.
	This is version 1.0
	It will prompt users for thses
	data and the user will in turn 
	supply whatever is being asked 
	for. 
	
	"""
	#pass

    # define the constructor
	def __init__(self, first, last, pay):
		self.first = first
		self.last = last
		self.pay = pay
		self.email = email = first + last + '@company.com'

	def fullName(self):
		return '{} {}'.format(self.first, self.last)	
	#print(worker1)

worker1 = Employee('james','Secondus', $60000)
#worker2 = Employee()

#worker1.first_name = 'james'
#worker1.last_name = 'Secondus'
#worker1.email = worker1.first_name + worker1.last_name + '@' + 'company.com'

print(worker1.email)
print(worker1.fullName())
    
		