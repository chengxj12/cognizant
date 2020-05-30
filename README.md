This webapp will be deploy to AWS cloud by using KOPS and KUBECTL  

**Source code for webapp**  
•	webapp application is written in Node.js  
•	app.js and package.json are stored in webapp folder  
• redis host and port need to be configured in app.js  
  
**Docker file for webapp and redis**  
•	create webapp docker image by Dockerfile stored in docker folder and push it to docker hub  
•	For backend default redis image is pulled and deployed  

**Kubernetes YAML for all the Kubernetes resources created**  
•	web.yml and web-service.yml are created for frontend  
• webapp image will be pull form docker hub  
•	redis.yml and redis-service.yml are created for backend  
•	make sure redis port set in redis-service is the same in app.js  
