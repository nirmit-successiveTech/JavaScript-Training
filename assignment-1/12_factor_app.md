
   ------------------------------- 12 Factor App----------------------------
   
   1. 12 Factor App is a methodology to build Software as a Service applications.
   2. It provides guidelines to built and manages application that follows coding norms.
   3. Apps built using this methodology are development oriented and contains minimum difference between development and production model.
   
   
   
   It includes following 12 factors:
   
   1. Codebase
      - Codebase is a basically central storage that contains all the source code.
      - An application can have multiple deployment(dev,prod,testing) but singular codebase.
      - It ensures wholeness and prevents code fragmentation.
      
   2. Dependencies
      - It states to declare all dependencies used in production in external file.
      - It Ensures to rely on implicit declaration.
      - It helps to increase the speed of development.
      
   3. Config
      - The config file contains the credentials and the data that shall not be seen by end users.
      - These credentials shall be stored in encrypted manner and in separate file(like.env) for better differentiation.
      - Often, these files are added in .gitignore to exclude during code pushing, to maintain privacy and secrecy.
      
   4. Backing-Resources
      - These are the external resources that is used by the application over the network.
      - These resources could be interchanged with other resources without affecting the code.
      - It ensures high flexibility and efficiency.
      
   5. Build Release Run
      - It states to deploy app into 3 parts.
         1. Build : - It mainly performs the compilation of the code.
                    - It resolves and includes all the library/package.
                    - It is immutable.
                    
         2. Release : - It takes the artifact from the previous file and add config.
         	      -  It functions by adding versions to deployment.
                    
         3. Run :  - It executes the application on the basis of previous artifacts.
         
         
    6. Process
       - Process includes the instances of application that could be executed independently.
       - The process shouldn't affect the function.
       - Also, the processes should not contain internal session and should be stateless.
       - It promotes the high recovery.
       
    7. Port Binding
       - It makes the app to provide its servies and listens to action at particular port number.
       - It makes application easily accessible.
       
       
    8. Concurrency
       - Application could be divided into smaller process.
       - Processes should be able to work parallely.
       
    9. Disposability 
    	- The app could be able to start and stop any time.
    	- It should not affect the overall performance of application.
    	- It is crucial for rapid recovery and deployment.
    	
    10. Production Parity
       - It is also called development parity.
       - It is used to keep similarity between development and production environment.
       - Helps to track bugs or error easily.
       
    11. Logs
       - The logs from all the instances are aggregated centrally.
       - The app does not keep the logs to itself.
       
    12. Admin Process
       - It inclues the commands that are executed  ocassionally.
       - Admin process should run in same environment as user's to avoid inconsistency(like syncing problem) and make debuggng easier. 
   
      
   
   