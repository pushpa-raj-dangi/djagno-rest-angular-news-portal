from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter,OrderingFilter
from rest_framework.permissions import AllowAny, DjangoModelPermissions, DjangoModelPermissionsOrAnonReadOnly, IsAdminUser, IsAuthenticated

from rest_framework.pagination import PageNumberPagination
from rest_framework.mixins import CreateModelMixin, RetrieveModelMixin,UpdateModelMixin
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.decorators import action


from app.serializers import AppUserSerializer, CategorySerializer, CommentSerializer, PostSerializer, TagSerializer
from portal.filters import PostFilter
from portal.permission import IsAdminOrReadOnly

from .models import  AppUser, Comment, Post, Category, Tag

from django.db.models import Count


class PostViewset(ModelViewSet):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer
    filter_backends = [DjangoFilterBackend,SearchFilter,OrderingFilter]

    # permission_classes  = [IsAdminOrReadOnly]

    filterset_class = PostFilter
    search_fields = ['title','description']
    ordering_fields = ['last_update']
    pagination_class = PageNumberPagination
    
    def get_serializer_context(self):
        return {'request':self.request}




class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.annotate(posts_count=Count('posts')).all()
    serializer_class = CategorySerializer
    # permission_classes = [IsAdminOrReadOnly]

    def destroy(self, request, *args, **kwargs):
        if Post.objects.filter(category_id=kwargs['pk']):
            return Response({'error': 'Category cannot be deleted because it includes one or more posts.'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

        return super().destroy(request, *args, **kwargs)


class TagViewSet(ModelViewSet):
    queryset = Tag.objects.annotate(tags_count=Count('posts')).all()
    serializer_class = TagSerializer

    def destroy(self, request, *args, **kwargs):
        if Post.objects.filter(category_id=kwargs['pk']):
            return Response({'error': 'Tag cannot be deleted because it includes one or more posts.'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

        return super().destroy(request, *args, **kwargs)

class AppUserViewSet(ModelViewSet):
    queryset = AppUser.objects.all()
    serializer_class = AppUserSerializer
    # permission_classes = [IsAdminUser]

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        
        return [IsAuthenticated()]

    @action(detail=True, methods=['GET', 'POST']
    # ,permission_classes=[IsAuthenticated]
    )
    def me(self, request):
        if request.method == 'GET':
            (user,created) = AppUser.objects.get_or_create(user_id=request.user.id)
            serializer = AppUserSerializer(user)
        elif request.method == 'PUT':
            serializer = AppUserSerializer(user,data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
        return Response(serializer.data)


class CommentViewSet(ModelViewSet):
    serializer_class = CommentSerializer

    def get_queryset(self):
        return Comment.objects.all()

    # def get_serializer_context(self):
    #     return {'post_id': self.kwargs['post_pk']}
