# Trial accounts for some features

_Note:_
- _If the webpage does not respond when logging in, please try using a different browser (e.g., Safari)._
- _You can switch languages (EN/CN) from the top right corner of the webpage._

**Address**：http://8.152.212.170:27021/

**Account：**

> user：public_01@example.com
> 
> password：public_01


> user：public_02@example.com
> 
> password：public_02

> user：public_03@example.com
> 
> password：public_03

> user：public_04@example.com
> 
> password：public_04

> user：public_05@example.com
> 
> password：public_05

---


# Data Platform Demo: Data Generation  

# 1. Check the data dashboard to determine the data production strategy  

Open the browser and go to http://8.152.212.170:27019/public/dashboard/6667a609-a8df4b01-9c46-8a942440788d to access the data dashboard.  

![](images/931d0064735b7b0e9dac1f9deed76924ed82c3ae7ee9d5ff35b29459b960d97d.jpg)  

# Dataset Overview:  

Display the statistics of the data in the dataset:  

$\bigcirc$ Tasks: Number of task types   
$\bigcirc$ Objects: Number of object types interacted with in the tasks   
$\bigcirc$ Episodes: Number of episodes   
$\bigcirc$ Steps: Number of steps   
$\bigcirc$ Images: Number of data frame images  

![](images/f433d3bc55888c9cc8c54417d94cea8f7b77ba7fcb082ee8d8ca6b1864461f84.jpg)  

# Production Monitor:  

Display the working time of data production tasks and the amount of data produced.  

![](images/d6416ce75cba0ce304af5f5b4ed99b670090b7cceafd1c55e8b83d42e7387f20.jpg)  

# Episode Length Distribution:  

![](images/d20c7727707a2d38a445a6a6b85c3fa32ee6f9d8cb2b35718832bcecdacac19b.jpg)  

# Task Distribution:  

Display the distribution of tasks across different categories, such as task types, complexity levels, or assigned resources.  

![](images/f3597cb61cb50c364da7dd304bf823f37b8bb688637e72bcb7246c31f50bb5bd.jpg)  

Object Distribution: Display the distribution of objects across different categories or types within the dataset.  

![](images/85daabe2428959c21cbb25189906b477cd9a58600f455a91806cac332a9a4041.jpg)  

The plug_factory task type has relatively little data. Next, we'll use it as an example to generate new data.  

# 2. Data Generation  

To generate data on the platform, follow these steps:  

1. Open the browser and go to http://8.152.212.170:27021/#/dashboard. Enter your username and password to access the data platform's homepage.  

![](images/1a96dd86e818252d9d67689c773e8f579c43cdd10e54bda07f6e900b1478c0b8.jpg)  

# 2. Open the RoboDPS/Data Produce page:  

![](images/828e9605f5b29fbd18e6e81e242c78eff87c47af829f3a086d32730b3b46106b.jpg)  

# 3. Configure the parameters and submit the data generation task:  

Below are the required parameters for this data generation task and their descriptions.  

<html><body><table><tr><td rowspan="4">Gener ate</td><td>Task</td><td>The task type for the robotic arm operation, set to plug factory in this example.</td></tr><tr><td>Objects</td><td>The type of object interacting with the robotic arm, set to random in this example.</td></tr><tr><td>Seeds</td><td>The random seed for initializing object positions and other randomized parameters in the task.</td></tr><tr><td>Databa se</td><td>The database where the generated data will be stored.</td></tr><tr><td rowspan="2"></td><td>Collecti on</td><td>The collection where the generated data will be stored.</td></tr></table></body></html>  

# 4. Monitor the data generation process:  

After creating the task, click the workflow link in the popup to navigate to the workflow details page and check the task progress.  

![](images/a991f8de6cf8154ec47093d6c3ddffe324e74903ae067ce323a183917086af32.jpg)  

# 3. Data Visualization  

Once the data is generated, you can visualize it for better understanding and analysis. Here's how you can proceed:  

# 1 Navigate to the Database section:  

Open the target dataset based on the configuration from the data generation task. In this document's example, the target database is db_public, and the target collection is robo_dps.  

a. In the Database list, select the db_publicto open the list of collections within the db_public database.  

![](images/ac4cfa71b52e4d36872aa9ce7c3c64b7e665823829cadcdb1a7a6926696cf448.jpg)  

b. In the Collections list, click View under the Operation column for robo_dps to enter the dataset details page for the robo_dps collection.  

![](images/b26bb4e357f390b3e029cd2cc9ad5573c79c1b74001128567142a8505ac0faa4.jpg)  

# 2. View the data frame:  

In the dataset details page for the robo_dps collection, you will see a list of data frames. From here, you can select and view each individual data frame.  

a. Click the View button on the right side of the data frame list to enter the individual data frame's visualization page.  

![](images/9a419e6ffa8b1a1e3fa40f9dc4d659b0fcb58a5084daa6fd62dd944fdd81e0ae.jpg)  

b. In the individual data frame visualization page, the left side displays the description file of the current data frame, while the right side shows the visualization of the current frame's data. You can switch between different visualizations using the dropdown menu on the right.  

![](images/adbf5d5edcbadec30e44c38e49f51e0dc326c602c1efe63823a0d309eb390889.jpg)  

# 3. Dataset Visualization:  

a. Click the Visualize button in the collection details page to enter the dataset visualization interface.  

![](images/7d00132473702357004d06ac4448857609f19c497d00c42bdee6a28946d83a74.jpg)  

b. You can split the visualization panel downward or to the right, or remove a panel, using the options available in the top-right corner of the interface.  

![](images/90519fbe6286e7369e048fe41db34deac4ad2b0babb9f98efa18204b1d151c52.jpg)  

c. Use the dropdown menu to switch between different sensors and datasets for visualization.  

![](images/82441892c56bb489ee59a99d68ac52d0473a30e36478c00712af9cdc6797fe17.jpg)  

d. In the model visualization panel, you can set it to display the robotic arm's predicted movement path.  

![](images/596575c53d1def7aab125e45e17cbe0bbdae60b2108186d11d0f1b45959a8dfa.jpg)  

e. Click the Play button in the top-left corner to play the entire dataset continuously, frame by frame.  

![](images/edd4cdc034a6cdc9a88d07d5cf21e2a8a87ca6a3f93b3c0ad8d4be6318d606df.jpg)  

# 4. Data Retrieval  

In the collection details page, you can retrieve data using multiple methods:  

# 1. MongoDB Query:  

In the collection details page, under the Query section, select the Query option. Use a query statement to retrieve specific data. For example, to filter all data with the task type plug_factory, use the following query:  

![](images/a4be62aaf5237d77ea0eddb8c42a19c2ca45e7ae772fbc12ce8cc44d5673bcfe.jpg)  

This will filter and display all data where the task type is set to plug_factory.  

![](images/495aea665c1e978f7fafbecc3228cbe17915040bd075e8aa7d1b91ae41d56aec.jpg)  

# 2. Natural language:  

In the collection details page, under the Query section, select the Query by Image option. Then, use natural language to search for data. For example, to filter all data frames that contain a green board, enter the following query:  

# "green board"  

Click Search, and the system will return all data frames that match the description of having a green board in the scene.  

![](images/8557a69257ac8e21a4d40c92ac65d9b049ba8fe79e50005b4004fde1a5351085.jpg)  

# 5. Data Copying  

Using the data copy function, you can copy data from a public dataset to a private dataset, or filter data from a dataset to create a subdataset with specific content. In this example, we will filter the data with the task type plug_factory and copy it to a new dataset called robo_dps_copy.  

1. Navigate to the Data Processing/Copy page.  

![](images/85c757112b84497b5007171953b8780eefcc9457bc43c613d5889cdabf7ba9ed.jpg)  

2.  

Configure Read Parameters:  

Database: Select the source database (e.g., db_public).  

$\bigcirc$ Collection: Choose the source collection (e.g., robo_dps).  

$\bigcirc$ Query: Use the following query to filter data with task type plug_factory:  

![](images/5446d9738ea4a63cada1c242be18b952dbd069642373829861e29df5ef596cd8.jpg)  

#  

![](images/2581bc79522b2bf74e7fdd54d8b2f825dac5e42a5ad05d5609a37c01db8a5d77.jpg)  

# 3. Configure Write Parameters:  

$\bigcirc$ Database: Select the target database (e.g., db_private).  

$\bigcirc$ Collection: Set the target collection to robo_dps_copy.  

These parameters can be specified freely. If the target collection does not exist, the data platform will automatically create it.  

Important Note: When creating a new target collection that doesn't exist, you need to manually type the collection name in the Collection field and press Enter to confirm before proceeding.  

![](images/0d75106be34ce8c19ce252d2604e25915786afdb4cce5dd6902670c5f3e35996.jpg)  

# 4. Execute the Copy:  

After configuring the parameters, initiate the copy process.  

# 5. Verify the Copied Data:  

After submitting the data copy task and completing the process, you can view the copied dataset in the dataset list. In this example, navigate to Database/dp_public/robo_dps_copy to view the copied dataset.  

![](images/cc0622b8240208b26116619c2cedce83900af9a9b1b432f98209930cfff4334e.jpg)  
