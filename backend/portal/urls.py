
from posixpath import basename
from . import views
from django.urls import URLPattern, path

from rest_framework_nested import routers


router = routers.DefaultRouter()
router.register('posts',views.PostViewset,basename='posts')
router.register('categories',views.CategoryViewSet)
router.register('tags',views.TagViewSet)
router.register('users',views.AppUserViewSet)
router.register('comments',views.CommentViewSet,basename='comments')

posts_router = routers.NestedDefaultRouter(router,'posts',lookup='post')
posts_router.register('comments', views.CommentViewSet,
                         basename='post-comments')
urlpatterns = router.urls + posts_router.urls

