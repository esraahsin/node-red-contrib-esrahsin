# node-red-contrib-esrahsin

## Overview

This is a custom Node-RED node created by Esra.

This node receives a message as input and replaces the message payload with the string "Esra".

Whatever the input message is, the node always returns "Esra".

## How to Use

1. Open Node-RED.
2. Find the `esra` node in the Function category.
3. Drag the node into your flow.
4. Connect an Inject node to the `esra` node.
5. Connect the `esra` node to a Debug node.
6. Click Deploy.
7. Click the Inject button.
8. Check the output in the Debug tab.

**Example Flow:**

`Inject → esra → Debug`

**Expected Output:**

```text
Esra
```

## Screenshot
![Esrahsin Node-RED Flow](images/node.png)

## Sample Flow

The sample flow uses three nodes:

- Inject: Sends a message.
- esrahsin: Replaces the payload with "Esra".
- Debug: Displays the output.

## Prerequisites

- Node.js
- Node-RED
- npm

## Change Log

### Version 1.0.0
- Created the custom Node-RED node.
- Changed the node name to esrahsin.
- Modified the JavaScript processing.
- Tested the node locally.