# Swarm City in-browser data fetching

## Entrypoints

User actions that trigger actions. This translate into redux actions being triggered and corresponding watchers to execute processes.

- User opens a hashtag:

  - Get the entire hashtag state. Hashtag metadata + all items data
  - Subcribe to events of that hashtag: "NewItem", "ItemChange" and "ReplyItem"
  - When an item is found to be an involved item, add that item to involved items

- User opens hashtagList:

  - Get the hashtagList + all hastags metadata

- Start-up:

  - Get new state of all involved items. If there are changes, dispatch notifications

- When user creates a new item:

  - Add that item to involved items

- When user replies to an item:

  - Add that item to involved items

## Involved items

An "involved item" is an item which the user is interested. They are referenced in localStorage to persist sessions, with the latest state the user saw the item with.

## Notifications

Notifications alert the user of some change of interest and is persisted in localStorage as an archive.
