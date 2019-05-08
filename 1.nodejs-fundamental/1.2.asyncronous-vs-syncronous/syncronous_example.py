import requests
response = requests.get('https://api.github.com')
print(response.content)
print("hello world")
