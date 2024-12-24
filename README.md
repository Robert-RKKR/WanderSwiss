# WanderSwiss

## Overview

WanderSwiss is a comprehensive outdoor adventure application designed to help users plan and carry out a variety of activities throughout Switzerland, including hiking, running, camping, biking, and more. At its core, the application combines four main aspects: Routes to plan or discover new trails for different types of mountain activities, a Knowledge Base to learn more about Switzerland, Events to participate in organized events with other users, and Memories to focus on their own achievements and experiences.

### **Activity Cycle:**

- **Planning** - Users can plan both one-day and multi-day trails for different activities, with the flexibility to choose from different route options leading to the same destination. A Trail is a point-to-point journey, while each Trail can have multiple routes, offering alternative ways to reach the destination based on difficulty, scenic highlights, or terrain type. This variety allows users to tailor their journey to their preferences, whether they're looking for a direct route or a more scenic one.
  
- **Preparation** - The app offers comprehensive logistical preparation tools, such as integration with SBB timetables to suggest the best transport options to the starting point of the adventure. In addition, real-time weather updates from Swiss Meteo allow users to prepare the right equipment for the current conditions.

- **Execution** - During the activity, users can use the app as a real-time guide to follow their planned route and document their progress.

- **Recording** - Users can log their completed activities as personalized journal entries, documenting each adventure with photos, notes, and experiences. The app allows users to add custom tags for specific memories (such as 'favorite trail', 'best views', or 'most challenging sections'), providing a detailed record of their experiences. The journal also aggregates statistics such as total distance and elevation, but the focus is on preserving the personal narrative of each adventure.

- **Memories** - The app allows users to plan their entire activity season by setting goals for specific time periods, whether it's distance, elevation gain, or number of trails to complete. The app visually tracks progress with progress bars and milestone markers. As users complete activities, their goals are updated in real time to show how close they are to achieving their goals. This approach helps motivate users by providing clear, measurable goals throughout the season.

### Knowledge Base

The WanderSwiss Knowledge Base is a rich resource that provides users with valuable insights into the regions they explore. Covering topics such as local trails, regions, cities, historical landmarks, and Switzerland's unique flora and fauna, this database enhances users' understanding and appreciation of Swiss landscapes. By providing comprehensive information on the cultural and natural history of each location, the Knowledge Base turns hiking into an inspirational experience, fostering a deeper connection between hikers and the places they visit.

### Event Planning

WanderSwiss includes a social event planning feature that allows users to organize and participate in hiking events with others. Whether planning group walks, meet-ups, or community challenges, users can connect with other enthusiasts who share similar interests. This feature promotes camaraderie and social engagement, allowing users to discover new trails together and create shared memories in the Swiss Alps.

### Summary

The aim of WanderSwiss is to support all stages of hiking, providing a clear and practical process from initial planning to post-hike reflection. This structure encourages organized, prepared, and informed hiking in the Swiss countryside.

## Purpose and Vision

The main objective of WanderSwiss is to provide a complete solution for hiking in the Swiss Alps, giving users the tools to plan their next outdoor adventure. A key feature of the application is the Hiking Cycle, which guides users through each of the essential phases of the hiking experience: Planning, Preparation, Execution, Records, and Future Goals. This structured approach supports walkers from the initial idea of a walk to post-hike reflection.

The Hiking Cycle is complemented by the Knowledge Base, a comprehensive resource providing valuable information on local trails, Swiss regions, cities, and landmarks. This database not only enhances practical planning but also fosters a deeper connection with the Swiss landscape by sharing the unique history and natural beauty of each area.

To further enrich the hiking experience, WanderSwiss also includes an events feature that allows users to create and join social gatherings related to hiking. This feature encourages community building and shared outdoor experiences, allowing users to connect with others who share their passion for exploring the Swiss Alps.

## Key Components

*WanderSwiss* is structured around five core sections, each supporting unique features to enhance the user experience:

### **Management**

Enables user account creation, preferences, and app settings to tailor the experience for each individual.

- **Models**:
    - **`UserModel`**: Manages user information and authentication.
    - **`UserSettingsModel`**: Stores user-specific settings such as language, theme mode, and notification preferences.
    - **`ApplicationSettingsModel`**: Contains application-wide settings like version and maintenance mode.
    - **`UserStatisticModel`**: Tracks user-specific statistics.
    - **`UserAchievementModel`**: Links users to their achievements.
    - **`AchievementModel`**: Defines various achievements users can earn.
    - **`ApplicationStatisticModel`**: Tracks overall application statistics.

### **Hiking**

Facilitates planning and tracking hikes, from single trails to multi-day adventures, with detailed route information and customization options.

- **Models**:
    - **`MultiDayRouteModel`**: Represents multi-day hiking routes created by users.
    - **`RouteModel`**: Represents individual hiking routes with various attributes.
    - **`RouteToMultiDayRouteModel`**: Links routes to multi-day routes.
    - **`UserToRouteModel`**: Tracks user-specific data related to routes.
    - **`UserToMultiDayRouteModel`**: Tracks user-specific data related to multi-day routes.

### **Knowledge Base**

Hosts a comprehensive database of Swiss points of interest, including cities, regions, natural landmarks, and historical sites.

- **Models**:
    - **`PoiModel`**: Represents points of interest with details such as location and type.
    - **`RegionModel`**: Represents geographical regions within Switzerland.
    - **`CountryModel`**: Represents countries, primarily for geographical context.
    - **`CommunityModel`**: Represents communities or local areas within regions.
    - **`CardModel`**: Represents informational cards about various points of interest or routes.

### **Notification**

Keeps users informed about updates, event reminders, and key app notifications.

- **Models**:
    - **`NotificationModel`**: Manages notifications sent to users.
    - **`ChangeLogModel`**: Tracks changes or updates within the application.

### **Events**

Supports user-created events, providing a platform for community engagement and group activities.

- **Models**:
    - **`EventModel`**: Represents events created by users, with details such as date, location, and participants.
    - **`UserToEventModel`**: Links users to the events they are participating in.
    - **`TemplateModel`**: Stores templates for events to streamline event creation.

### **Media**

Contains all application media such as files and photos for other objects.

- **Models**:
    - **`PhotoModel`**: Represents photos uploaded by users.
    - **`FileModel`**: Represents other files uploaded by users.
    - Intermediary Models: **`PhotoToRouteModel`**, **`PhotoToEventModel`**, **`PhotoToCardModel`**, **`FileToCardModel`**, **`FileToRouteModel`** - manage relationships between media and other entities.

### **Comments**

Manage user comments that can be added to other models.

- **Models**:
    - **`CommentModel`**: Allows users to comment on events, routes, and other entities.

## Inspirations

- [Outdooractive - Ridge Hike in the Swiss Alpstein](https://www.outdooractive.com/en/route/long-distance-hiking/appenzell-alps/ridge-hike-in-the-swiss-alpstein/162270147/)
- [Schweizer Wanderwege - Wanderung der Calancasca](https://www.schweizer-wanderwege.ch/de/wandervorschlaege/2041/Wanderung-der-Calancasca-entlang-im-Parco-Val-Calanca#content_hike)
- [Strava Global Heatmap](https://www.strava.com/maps/global-heatmap?sport=MountainBikeRide&style=standard&terrain=false&labels=true&poi=true&cPhotos=true&gColor=mobileblue&gOpacity=100#10.74/47.1064/8.7042)
- [Hiking Buddies - Routes](https://www.hiking-buddies.com/routes/routes_list/)
