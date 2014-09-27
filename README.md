visual-rtm
==========

Visual tool for Remember the Milk task management

**Motivation**

I use Remember the Milk (RTM) as my Getting things done (GTD) backlog.

Daily task management and GTD weekly review via RTM basic web UI is a bit cumbersome. 
To be able to do the tasks swiftly you have to memorise keyboard shortcuts.

The intend of this project is to build visually beautiful tool for RTM task management 
to make these these GTD tasks more fun.

Initial plan:

```
  tagSpace        tasksInProgress         locationSpace
  
  tag1            task1                   loc1
  tag2            task2                   loc2
  tag3            task3                   loc3
  tag4                                    loc4
  tag5
```

Tools would allow attaching and removing tags and/or lcoations from the processed tasks being processed.

Later on add functionality for dueDates, propponing, completion, repeats, ..


**Usage**

Prerequirements: git and nodejs installed

1. Clone the project (git clone https://github.com/iaarnio/visual-rtm)

1. Install requirements (cd visual-rtm; npm install)

1. Start web server (npm start)

1. Open browser to http://localhost:8000/app/
