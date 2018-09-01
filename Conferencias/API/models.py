from djongo import models


# Create your models here.

class Eventos(models.Model):
    Name = models.CharField(max_length=100)
    acronym = models.CharField(max_length=100)
    topics = models.CharField(max_length=100)
    start_date = models.CharField(max_length=100)
    deadline_date = models.CharField(max_length=100)
    location = models.CharField(max_length=100)     
    favoritos = models.BooleanField(default=False)