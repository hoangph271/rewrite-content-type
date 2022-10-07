# rewrite-content-type

Just send a GET request with two query params (must be URL encoded):

- `url`: The target URL you want to rewrite the `Content-Type` header
- `contentType`: The desired `Content-Type` header

Example:  
[https://rewrite-content-type.deno.dev/?url=https%3A%2F%2Fcr-ss-service.azurewebsites.net%2Fapi%2FScreenShot%3Fwidget%3Dsummary%26username%3Dhoangph271%26branding%3Dfalse&contentType=image%2Fjpeg](https://rewrite-content-type.deno.dev/?url=https%3A%2F%2Fcr-ss-service.azurewebsites.net%2Fapi%2FScreenShot%3Fwidget%3Dsummary%26username%3Dhoangph271%26branding%3Dfalse&contentType=image%2Fjpeg)
