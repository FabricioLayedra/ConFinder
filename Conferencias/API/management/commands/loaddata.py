from django.core.management.base import BaseCommand, CommandError
import json
import os
from API import models


class Command(BaseCommand):
    def handle(self, *args, **options):
        path = os.path.dirname(__file__)

        with open(path + '/principal.json') as f:
            data = json.load(f)

        for instance in data:
            evento = models.Eventos(Name=instance['name'], 
                                    acronym = instance['acronym'], 
                                    topics = instance['topics'], 
                                    start_date = instance['start_date'], 
                                    deadline_date = instance['submission_deadline'],
                                    location = instance['location'],
                                    favoritos = False)
            evento.save()
