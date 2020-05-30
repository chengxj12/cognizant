**Link to source code for webapp**  
•	webapp application is written in Node.js  
•	app.js and package.json are stored in webapp folder  
• configure redis host and port in app.js  
  
**Docker file for webapp and redis**  
•	create webapp docker image by Dockerfile stored in docker folder and push it to docker hub  
•	For backend default redis image is pulled and deployed  

**Kubernetes YAML for all the Kubernetes resources created**  
•	web.yml and web-service.yml are created for frontend  
• webapp image will be pull form docker hub  
•	redis.yml and redis-service.yml are created for backend  
•	scripts are stored in kubernetes folder  
