#pip install pytube
url=input("Enter the youtube link: ")
my_video=YouTube(url)
from pytube import YouTube
#this's part shows the title of the video
print(f"The title of the video is: {my_video.title}")

#this's part shows the thumbnail of the video

print(f"Here is the thumbnail of the video: {my_video.thumbnail_url}")

#this's the part that let you download the video

my_video=my_video.streams.get_highest_resolution()

print("Dowloading the video")
