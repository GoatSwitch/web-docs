---
id: limitations-troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Common Issues

## Project Detection Issues

:::danger Project Not Found
Check:

- Project size (< 10,000 LoC)
- Build configuration file exists (.csproj/pom.xml/build.gradle)
- Git repository is initialized and clean
  :::

## Runtime Issues

:::warning Chat Unresponsive
Solutions:

1. Reload VSCode window
2. Restart VSCode completely
   :::

:::info Unexpected AI Behavior
If AI generates unexpected changes:

1. Use `git reset --hard HEAD` to revert changes
2. Try rephrasing your task more specifically
3. Break down complex tasks into smaller steps
   :::

## Platform Limitations

:::caution Unsupported Environments

- VSCode Web version is not supported
  :::

## Getting Help

<Tabs>
  <TabItem value="github" label="GitHub Issues" default>
    ```plaintext
    Report bugs and feature requests:
    https://github.com/GoatSwitch/web-docs
    ```
  </TabItem>
  <TabItem value="email" label="Email Support">
    ```plaintext
    Technical and general support:
    hello@goatswitch.ai
    ```
  </TabItem>
</Tabs>
