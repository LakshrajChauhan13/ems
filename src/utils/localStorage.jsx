const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true, 
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update website",
        taskDescription: "Revamp the homepage design",
        taskDate: "2024-10-12",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client meeting",
        taskDescription: "Discuss project requirements",
        taskDate: "2024-10-10",
        category: "Client"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client feedback",
        taskDescription: "Gather feedback from clients after product launch",
        taskDate: "2024-10-12",
        category: "Support"
      }
    ]
  },
  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Logo",
        taskDescription: "Create a logo for the new app",
        taskDate: "2024-10-14",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "QA Testing",
        taskDescription: "Perform testing on the login module",
        taskDate: "2024-10-13",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        taskDescription: "Deployment failed due to server error",
        taskDate: "2024-10-15",
        category: "DevOps"
      }
    ]
  },
  {
    id: 3,
    firstName: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Research Trends",
        taskDescription: "Explore new design trends for 2025",
        taskDate: "2024-10-11",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix bugs",
        taskDescription: "Fix CSS bugs in mobile view",
        taskDate: "2024-10-09",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Docs",
        taskDescription: "Complete API documentation",
        taskDate: "2024-10-10",
        category: "Documentation"
      }
    ]
  },
  {
    id: 4,
    firstName: "Reyansh",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Slides",
        taskDescription: "Create a pitch deck for the demo day",
        taskDate: "2024-10-12",
        category: "Presentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Sync Data",
        taskDescription: "Failed to sync user data with backend",
        taskDate: "2024-10-11",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team Standup",
        taskDescription: "Daily morning standup with remote team",
        taskDate: "2024-10-10",
        category: "Management"
      }
    ]
  },
  {
    id: 5,
    firstName: "Ayaan",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Blog Writing",
        taskDescription: "Write a blog on new feature rollout",
        taskDate: "2024-10-13",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "SEO Audit",
        taskDescription: "Audit website SEO and improve rankings",
        taskDate: "2024-10-12",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Send Newsletter",
        taskDescription: "Failed to send email due to SMTP error",
        taskDate: "2024-10-11",
        category: "Email"
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123",
    firstName: "Admin"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees,admin} 
    // console.log(employees, admin)
}