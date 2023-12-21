use zenClass

 db.createCollection("users") 

 db.createCollection("codekata") 

 db.createCollection("attendance")

 db.createCollection("topics") 

 db.createCollection("tasks") 

 db.createCollection("company_drive")

 db.createCollection("mentors")

 db.users.insertMany([
    {id:1,name:"jeya chandran",email:"jeyachandran@gmail.com",role:"student",status:"present"},
    {id:2,name:"surya",email:"surya@gmail.com",role:"student",status:"absent"},
    {id:3,name:"akash",email:"akash@gmail.com",role:"student",status:"present"},
    {id:4,name:"sankar",email:"sankar@gmail.com",role:"student",status:"absent"},
    {id:5,name:"luffy",email:"luffy@gmail.com",role:"student",status:"present"},
    {id:6,name:"zoro",email:"zoro@gmail.com",role:"student",status:"absent"}
])

db.codekata.insertMany([
    {id:1,topics:"array",totalQ:100,completedQ:45},
    {id:2,topics:"string",totalQ:50,completedQ:23},
    {id:3,topics:"dsa",totalQ:30,completedQ:13},
    {id:4,topics:"numbers",totalQ:40,completedQ:34},
    {id:5,topics:"react js",totalQ:20,completedQ:18},
    {id:6,topics:"js",totalQ:60,completedQ:55}
])

db.topics.insertMany([
    {id: 1,title: "Html",description: "html basic and all topics",resources: "https://zenclass.com/html",
    date: new Date("2023-09-25") },
    {id: 2,title: "css",description: "design a student form",resources: "https://zenclass.com/css",
    date: new Date("2023-09-30") },
    {id: 3,title: "js",description: "js intro and functionalities",resources: "https://zenclass.com/js",
    date: new Date("2023-10-05") },
    {id: 4,title: "react js",description: "react js routing and link",resources: "https://zenclass.com/reactjs",
    date: new Date("2023-10-28") },
    {id: 5,title: "node js",description: "what is node js?",resources: "https://zenclass.com/nodejs",
    date: new Date("2023-11-15") },
    {id: 6,title: "mongo db",description: "mongo database",resources: "https://zenclass.com/mongodb",
    date: new Date("2023-11-29") },
])

db.tasks.insertMany([
{id: 1,topicId: new ObjectId("6579a7d11f441d6aa43642c7"),title: "html",description: "create a student form",
deadline: new Date("2023-09-29"),assignedTo: "student",status: "completed"},
{id: 2,topicId: new ObjectId("6579a7d11f441d6aa43642c8"),title: "css",description: "design a student form",
deadline: new Date("2023-10-15"),assignedTo: "student",status: "pending"},
{id: 3,topicId: new ObjectId("6579a7d11f441d6aa43642c9"),title: "js",description: "create card with title",
deadline: new Date("2023-10-20"),assignedTo: "student",status: "pending"},
{id: 4,topicId: new ObjectId("6579a7d11f441d6aa43642ca"),title: "react js",description: "crate clean ui with mockapi",
deadline: new Date("2023-10-25"),assignedTo: "student",status: "completed"},
{id: 5,topicId: new ObjectId("6579a7d11f441d6aa43642cb"),title: "node js",description: "create a node fs",
deadline: new Date("2023-10-31"),assignedTo: "student",status: "pending"},
{id: 6,topicId: new ObjectId("6579a7d11f441d6aa43642cc"),title: "mongo db",description: "create a student database",
deadline: new Date("2023-11-08"),assignedTo: "student",status: "completed"}
])

db.attendance.insertMany([
  {id:1,studentID: new ObjectId("6579a76c1f441d6aa43642bb"),topicsId: new ObjectId("6579a7d11f441d6aa43642c7"),
  codekataId: new  ObjectId("6579a7a41f441d6aa43642c1"),tasksId: new  ObjectId("6579a9b31f441d6aa43642cd") ,date:new Date("2023-09-25"),status:"present"},
  
  {id:2,studentID: new ObjectId("6579a76c1f441d6aa43642bc"),topicsId: new  ObjectId("6579a7d11f441d6aa43642c8"),
  codekataId: new  ObjectId("6579a7a41f441d6aa43642c2"),tasksId:new  ObjectId("6579a9b31f441d6aa43642ce") ,date:new Date("2023-09-25"),status:"absent"},
  
  {id:3,studentID: new ObjectId("6579a76c1f441d6aa43642bd"),topicsId: ObjectId("6579a7d11f441d6aa43642c9"),
  codekataId: new  ObjectId("6579a7a41f441d6aa43642c3"),tasksId: new ObjectId("6579a9b31f441d6aa43642cf") ,date:new Date("2023-09-25"),status:"present"},
  
  {id:4,studentID: new ObjectId("6579a76c1f441d6aa43642be"),topicsId: new ObjectId("6579a7d11f441d6aa43642ca"),
  codekataId: new ObjectId("6579a7a41f441d6aa43642c4"),tasksId: new  ObjectId("6579a9b31f441d6aa43642d0") ,date:new Date("2023-09-25"),status:"absent"},
  
  {id:5,studentID:new ObjectId("6579a76c1f441d6aa43642bf"),topicsId: new ObjectId("6579a7d11f441d6aa43642cb"),
  codekataId: new ObjectId("6579a7a41f441d6aa43642c5"),tasksId: new ObjectId("6579a9b31f441d6aa43642d1") ,date:new Date("2023-09-25"),status:"present"},
  
  {id:6,studentID:new ObjectId("6579a76c1f441d6aa43642c0"),topicsId: ObjectId("6579a7d11f441d6aa43642cc"),
  codekataId: new  ObjectId("6579a7a41f441d6aa43642c6"),tasksId: new  ObjectId("6579a9b31f441d6aa43642d2") ,date:new Date("2023-09-25"),status:"absent"}
])

db.mentors.insertMany([
    {id:1,name:"sangeetha",email:"sangeetha@gmail.com",field:"html",expereience:10,mentees:[1,2]},
    {id:2,name:"shyam",email:"shyam@gmail.com",field:"css",expereience:8,mentees:[1,2,3]},
    {id:3,name:"manoj",email:"manoj@gmail.com",field:"js",expereience:9,mentees:[1,2,3,4]},
    {id:4,name:"senthil",email:"senthil@gmail.com",field:"reactjs",expereience:10,
    mentees:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]},
    {id:5,name:"dinesh",email:"dinesh@gmail.com",field:"nodejs",expereience:11,mentees:[1,2,3,4,5]},
    {id:6,name:"muthu",email:"muthu@gmail.com",field:"mongo db",expereience:5,mentees:[1,2,3,4,5,6,7]}
])

db.company_drive.insertMany([
        {id: 1,companyName:"google",date: new Date("2023-09-23"),location: "banglore",
            topicsCovered: [ObjectId("6579a7d11f441d6aa43642c7"),ObjectId("6579a7d11f441d6aa43642c8")], 
            mentors: [ObjectId("6579b32e1f441d6aa43642d9"),ObjectId("6579b32e1f441d6aa43642da")], 
            participants: [ObjectId("6579a76c1f441d6aa43642bb"), ObjectId("6579a76c1f441d6aa43642bc"), ObjectId("6579a76c1f441d6aa43642c0")]},

        {id: 2,companyName:"amazon",date: new Date("2023-10-03"),location: "banglore",
            topicsCovered: [ObjectId("6579a7d11f441d6aa43642c7"),ObjectId("6579a7d11f441d6aa43642cc"),ObjectId("6579a7d11f441d6aa43642c8")], 
            mentors: [ObjectId("6579b32e1f441d6aa43642db")], 
            participants: [ObjectId("6579a76c1f441d6aa43642bd")]},

        {id: 3,companyName:"flipkart",date: new Date("2023-10-15"),location: "chennai",
            topicsCovered: [ObjectId("6579a7d11f441d6aa43642c9"),ObjectId("6579a7d11f441d6aa43642c7"),ObjectId("6579a7d11f441d6aa43642c8")], 
            mentors: [ObjectId("6579b32e1f441d6aa43642db")], 
            participants: [ObjectId("6579a76c1f441d6aa43642be"), ObjectId("6579a76c1f441d6aa43642bc"),ObjectId("6579a76c1f441d6aa43642c0")]},

        {id: 4,companyName:"adobe",date: new Date("2023-10-21"),location: "mumbai",
            topicsCovered: [ObjectId("6579a7d11f441d6aa43642c7"),ObjectId("6579a7d11f441d6aa43642c9"),ObjectId("6579a7d11f441d6aa43642c8")], 
            mentors: [ObjectId("6579b32e1f441d6aa43642dc")], 
            participants: [ObjectId("6579b32e1f441d6aa43642dd"), ObjectId("6579a76c1f441d6aa43642c0")]},

        {id: 5,companyName:"microsoft",date: new Date("2023-10-27"),location: "hyderabad",
            topicsCovered: [ObjectId("6579a7d11f441d6aa43642c7"),ObjectId("6579a7d11f441d6aa43642ca"),ObjectId("6579a7d11f441d6aa43642c8")], 
            mentors: [ObjectId("6579b32e1f441d6aa43642dd")], 
            participants: [ObjectId("6579a76c1f441d6aa43642bf"),ObjectId("6579a76c1f441d6aa43642bc"), ObjectId("6579a76c1f441d6aa43642c0")]},

       {id: 6,companyName:"apple",date: new Date("2023-10-31"),location:"coimbatore",
            topicsCovered: [ObjectId("6579a7d11f441d6aa43642c7"),ObjectId("6579a7d11f441d6aa43642c8")], 
            mentors: [ObjectId("6579b32e1f441d6aa43642de")], 
            participants: [ ObjectId("6579a76c1f441d6aa43642c0")]}
])

//task and topic in oct 
db.tasks.aggregate([
    {
      $lookup: {
        from: "topics",
        localField: "topicId",
        foreignField: "_id",
        as: "topicDetails"
      }
    },
    {
      $match: {
        "topicDetails.date": {
          $gte: new Date("2023-10-01"),
          $lte: new Date("2023-10-31")
        }
      }
    }
  ]).pretty()
  

//company in 15 oct - 31 oct

db.company_drive.find( {date:{$gte :new Date("2023-10-15"),$lte :new Date("2023-10-31")}}).pretty()


//student apperead in company_drive
db.company_drive.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "participants",
        foreignField: "_id",
        as: "participantsInfo"
      }
    },
    {
      $unwind: "$participantsInfo" 
    },
    {
      $match: {
        "participantsInfo.status": "present" 
      }
    },
    {
      $project: {
        companyName: 1,
        "participantsInfo.name": -1,
        "participantsInfo.email": 1,
        "participantsInfo.role": 1,
        "participantsInfo.status": 1
      }
    }
  ]).pretty()
 
  //total problems solved
  db.users.aggregate([
    {
      $lookup: {
        from: "codekata",
        let: { userId: "$id" },
        pipeline: [
          {
            $match: {
              $expr: { $eq: ["$$userId", "$solverId"] },
              completedQ: { $gt: 0 } 
            }
          },
          {
            $group: {
              _id: "$solverId",
              totalProblemsSolved: { $sum: "$completedQ" }
            }
          }
        ],
        as: "problemsSolved"
      }
    },
    {
      $project: {
        _id: 0,
        userId: "$id",
        name: "$name",
        totalProblemsSolved: {
          $ifNull: [{ $arrayElemAt: ["$problemsSolved.totalProblemsSolved", 0] }, 0]
        }
      }
    }
  ])
  

  //mentors above 15 mentee
  db.mentors.aggregate([
    {
      $project: {
        _id: 1,
        name: 1,
        numMentees: { $size: "$mentees" } 
      }
    },
    {
      $match: {
        numMentees: { $gt: 15 } 
      }
    }
  ])
  
  
//students who are absent ans tasks haven't been completed from oct 15 - oct 30
db.users.aggregate([
    {
      $match: { status: "absent" }
    },
    {
      $lookup: {
        from: "tasks",
        let: { userId: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$$userId", "$studentID"] },
                  { $eq: ["$status", "pending"] },
                  { $gte: ["$deadline", new Date("2020-10-15")] },
                  { $lte: ["$deadline", new Date("2020-10-31")] }
                ]
              }
            }
          }
        ],
        as: "userTasks"
      }
    },
    {
      $match: { "userTasks": { $exists: true, $ne: [] } }
    },
    {
      $count: "totalUsersWithUnsubmittedTasks"
    }
  ]).pretty()
  
  //pending tasks and absen
  db.users.aggregate([
    { $match: { status: { $in: ["pending", "absent"] } } },
    {
      $group: {
        _id: "$status",
        data: { $push: { id: "$_id", name: "$name", email: "$email" } }
      }
    }
  ]).pretty()
  db.tasks.find({status:"pending"}).pretty()