---
id: workflow
title: Workflow
sidebar_label: Workflow
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Using GoatSwitch AI

## Basic Workflow

```mermaid
graph TD;
    A[Open Folder with VSCode] --> B[Ensure no pending changes in repo];
    B --> C[Click GoatSwitch Icon];
    C --> D[Select Project];
    D --> E[Describe Task];
    E --> F{Approve Plan?};
    F --> |Yes| G[Watch Git Diff until all steps are done];
    F --> |No| E[Select Project];
    G --> H[Review Changes];
    H --> I[Commit or Discard Changes];
    I --> E[Describe Task];
    I --> D[Select Project];
```

## Example Tasks

<Tabs>
  <TabItem value="dotnet" label=".NET" default>
    ```plaintext
    - "Upgrade to .NET 8"
    - "Refactor legacy code patterns"
    - "Remove deprecated APIs"
    - "Switch to Entity Framework Core"
    - "Integrate library X"
    - "Switch to library Y"
    ```
  </TabItem>
  <TabItem value="java" label="Java">
    ```plaintext
    - "Integrate Java 21 features"
    - "Update to Spring Boot 3"
    - "Refactor legacy code patterns"
    - "Remove deprecated APIs"
    - "Switch to Hibernate"
    - "Integrate library X"
    - "Switch to library Y"
    ```
  </TabItem>
</Tabs>
