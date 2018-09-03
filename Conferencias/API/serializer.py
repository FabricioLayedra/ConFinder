from rest_framework import serializers
from API.models import Eventos


class EventosSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Eventos
        fields = '__all__'

        extra_kwargs = {'Name': {'required': False, "read_only": True},
                        'acronym': {'required': False, "read_only": True},
                        'topics': {'required': False, "read_only": True},
                        'start_date': {'required': False, "read_only": True},
                        'deadline_date': {'required': False, "read_only": True},
                        'location': {'required': False, "read_only": True}
                        }