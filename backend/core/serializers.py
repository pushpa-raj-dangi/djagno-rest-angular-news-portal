
from djoser.serializers import UserSerializer as BaseUserSerializer, UserCreateSerializer as BaseUserCreate

class UserCreateSerializer(BaseUserCreate):
    class Meta(BaseUserCreate.Meta):
        fields = ['id','email','username','password','first_name','last_name']


class UserSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        fields = ['id','email','username','first_name','last_name']
