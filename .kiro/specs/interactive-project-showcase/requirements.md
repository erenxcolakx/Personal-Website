# Requirements Document

## Introduction

This feature enhancement will add multiple new projects to the portfolio website with interactive iframe functionality, allowing users to explore and interact with live project demos directly within the portfolio. The projects include various web applications spanning different domains like AI, weather, fitness, healthcare, and social platforms.

## Requirements

### Requirement 1

**User Story:** As a portfolio visitor, I want to view and interact with live project demos through embedded iframes, so that I can experience the projects firsthand without leaving the portfolio site.

#### Acceptance Criteria

1. WHEN a user navigates to the projects section THEN the system SHALL display all projects including the new interactive ones
2. WHEN a user clicks on a project THEN the system SHALL display the project in an embedded iframe
3. WHEN the iframe loads THEN the system SHALL allow full user interaction with the embedded application
4. IF the iframe fails to load THEN the system SHALL display a fallback message with a direct link to the project

### Requirement 2

**User Story:** As a portfolio visitor, I want to see the technologies used for each project, so that I can understand the technical skills demonstrated.

#### Acceptance Criteria

1. WHEN viewing a project THEN the system SHALL display a list of technologies used
2. WHEN displaying technologies THEN the system SHALL use consistent formatting and visual indicators
3. WHEN technologies are listed THEN the system SHALL include relevant frameworks, languages, and tools

### Requirement 3

**User Story:** As a portfolio visitor, I want to easily navigate between different projects, so that I can explore multiple projects efficiently.

#### Acceptance Criteria

1. WHEN viewing a project iframe THEN the system SHALL provide navigation controls to switch between projects
2. WHEN switching projects THEN the system SHALL update the iframe content smoothly
3. WHEN navigating THEN the system SHALL maintain the project list visibility for easy selection

### Requirement 4

**User Story:** As a portfolio owner, I want to showcase the following specific projects with their respective technologies, so that visitors can see my diverse skill set.

#### Acceptance Criteria

1. WHEN displaying projects THEN the system SHALL include Hive Front (https://hive-front-psi.vercel.app) with React/Next.js technologies
2. WHEN displaying projects THEN the system SHALL include DeepSport Dashboard (https://deep-sport-dashboard.vercel.app) with dashboard technologies
3. WHEN displaying projects THEN the system SHALL include Trakya Rezonans (https://trakyarezonans.com) with healthcare/medical technologies
4. WHEN displaying projects THEN the system SHALL include HitnessLab (https://hitness-lab.vercel.app) with fitness application technologies
5. WHEN displaying projects THEN the system SHALL include DreamerApp (https://dreamerapp.vercel.app) with AI dream interpretation technologies
6. WHEN displaying projects THEN the system SHALL include Live Weather (https://liweather.vercel.app) with weather API technologies
7. WHEN displaying projects THEN the system SHALL include Smart Test AI (https://smart-test-ai.vercel.app) with PDF processing and AI technologies
8. WHEN displaying projects THEN the system SHALL include Bweet (https://bweet.vercel.app) with social media platform technologies

### Requirement 5

**User Story:** As a portfolio visitor, I want the iframe integration to be responsive and well-designed, so that I have a seamless viewing experience across different devices.

#### Acceptance Criteria

1. WHEN viewing on desktop THEN the system SHALL display iframes in an appropriate size for desktop viewing
2. WHEN viewing on mobile THEN the system SHALL adapt iframe dimensions for mobile screens
3. WHEN the iframe content is responsive THEN the system SHALL maintain proper aspect ratios
4. WHEN displaying iframes THEN the system SHALL ensure proper loading states and error handling

### Requirement 6

**User Story:** As a portfolio visitor, I want to access direct links to projects, so that I can open them in new tabs if needed.

#### Acceptance Criteria

1. WHEN viewing a project THEN the system SHALL provide a "Open in New Tab" button or link
2. WHEN clicking the external link THEN the system SHALL open the project in a new browser tab
3. WHEN providing external links THEN the system SHALL ensure all URLs are accessible and functional