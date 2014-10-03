function initTasks() {
    var tasks = 
    {
        "tasks": 
        {
            "list": 
            {
                "id": "987654321",
                "current": "2006-05-07T08:13:26Z",
                "taskseries": 
                [ 
                {
                    "id": "100",
                    "created": "2006-05-07T10:19:54Z",
                    "modified": "2006-05-07T10:19:54Z",
                    "name": "Get Bananas",
                    "source": "api",
                    "location_id" : "shop",
                    "tags": ["buy", "food"],
                    "task": 
                    {
                        "id": "110",
                        "has_due_time": "0",
                        "added": "2006-05-07T10:19:54Z",
                        "priority": "N",
                        "postponed": "0"
                    }
                },
                {
                    "id": "200",
                    "created": "2006-05-07T10:19:54Z",
                    "modified": "2006-05-07T10:19:54Z",
                    "name": "Remember the milk",
                    "source": "api",
                    "location_id" : "home",
                    "tags": ["milk", "buy"],
                    "task": {
                        "id": "210",
                        "has_due_time": "0",
                        "added": "2006-05-07T10:19:54Z",
                        "priority": "N",
                        "postponed": "0"
                    }
                }
                ],
                "deleted": 
                {
                    "taskseries": 
                    [
                    {
                        "id": "650390",
                        "task": {
                            "id": "815255",
                            "deleted": "2006-05-07T14:26:47Z"
                        }
                    }
                    ]
                }
            }
        }
    };
    
    return tasks.tasks.list.taskseries;
}

function initLocations() {
    var locations = 
    {
      "locations": {
        "location": [
          {
            "id": "987654321",
            "name": "net",
            "longitude": "13.411508",
            "latitude": "52.524008",
            "zoom": "9",
            "address": "",
            "viewable": "1"
          },
          {
            "id": "987654322",
            "name": "home",
            "longitude": "-74.00713",
            "latitude": "40.71449",
            "zoom": "9",
            "address": "",
            "viewable": "1"
          },
          {
            "id": "987654323",
            "name": "work",
            "longitude": "151.216667",
            "latitude": "-33.8833333",
            "zoom": "7",
            "address": "",
            "viewable": "1"
          }
        ]
      }
    };
    
    return locations.locations.location;
}

function initTags(t) {
    var tags = [];
    for (var i = 0; i < t.tasks.length; ++i) {
        tags = _.union(tags, t.tasks[i].tags);
    };
    return tags;
}