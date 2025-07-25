var os = require('os')
const network = os.networkInterfaces()

const Wifi = network['Wi-Fi'] ?? network['Wi-Fi 2']
const HOST = Wifi?.filter(item => item.family === 'IPv4')[0].address
// const HOST = '192.168.1.9'
const PORT = 8080

const MESSAGE_TYPE = {
  TEXT: 'TEXT',
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  NOTIFY: 'NOTIFY',
  POLL: 'POLL'
}

const MESSAGE_NOTIFY_TYPE = {
  CHANGE_AVATAR: 'CHANGE_AVATAR',
  CHANGE_AKA: 'CHANGE_AKA',
  POLL: 'POLL',
  CHANGE_CONVENTION_NAME: 'CHANGE_CONVENTION_NAME'
}

const MESSAGE_ACTION = {
  EDIT: 'EDIT',
  REMOVE: 'REMOVE',
  DELETE: 'DELETE'
}

const RESPONSE_STATUS = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

const FRIEND_STATUS = {
  NONE: 'NONE',
  PENDING: 'PENDING',
  ACCEPTING: 'ACCEPTING',
  REFUSING: 'REFUSING',
  CANCELING: 'CANCELING',
  FRIEND: 'FRIEND'
}

const MEMBER_STATUS = {
  PENDING: 'PENDING',
  BLOCK: 'BLOCK',
  ACCEPT: 'ACCEPT'
}

const SCOPE = {
  PUBLIC: 'PUBLIC',
  FRIEND: 'FRIEND',
  PRIVATE: 'PRIVATE',
  OWNER: 'OWNER'
}

const POST_STATUS = {
  ACTIVE: 'ACTIVE',
  TRASH: 'TRASH',
  DELETE: 'DELETE'
}

const POST_ATTACHMENT = {
  TEXT: 'TEXT',
  IMAGE: 'image/jpeg',
  VIDEO: 'video/mp4',
  NOTIFY: 'NOTIFY',
  MIX: 'MIX'
}

const POST_TYPE = {
  PERSONAL: 'PERSONAL',
  SHARE: 'SHARE',
  GROUP: 'GROUP'
}

const POST_ACTION = {
  UPDATE_CONTENT: 'UPDATE_CONTENT',
  UPDATE_ATTACHMENT: 'UPDATE_ATTACHMENT',
  UPDATE_ALL: 'UPDATE_ALL',
  DELETE: 'DELETE',
  TRASH: 'TRASH'
}

const FOLDER_NAME = {
  CONVENTIONS: 'conventions',
  POSTS: 'posts',
  USERS: 'users',
  IMAGE: 'image',
  VIDEO: 'video',
  GROUP: 'groups'
}

const FILE_EXT = {
  IMAGE: '.png',
  VIDEO: '.mp4'
}

const MEMBER_ROLE = {
  ADMIN: 'ADMIN',
  CENSOR: 'CENSOR',
  MEMBER: 'MEMBER'
}

const TYPE_SCREEN = {
  PROFILE: 'PROFILE',
  POST: 'POST',
  CONVENTION: 'CONVENTION',
  CALL: 'CALL',
  FRIEND: 'FRIEND'
}

const REACTION_TYPE = {
  POST: 'POST',
  COMMENT: 'COMMENT'
}

const SEARCH_TYPE = {
  USER: 'USER',
  GROUP: 'GROUP',
  TEXT: 'TEXT',
  POST: 'POST',
  IMAGE: 'IMAGE'
}

const MEMBER_CONVENTION_STATUS = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
}

const NOTIFY_CONVENTION_STATUS = {
  ALLOW: 'ALLOW',
  NOT_ALLOW: 'NOT_ALLOW',
  CUSTOM: 'CUSTOM'
}

const POLL_STATUS = {
  DOING: 'DOING',
  DONE: 'DONE'
}

const POLL_TYPE = {
  CONVENTION: 'CONVENTION',
  POST: 'POST'
}

const NOTIFICATION_TYPE = {
  POST_REACTION: 'POST_REACTION',
  POST_COMMENT: 'POST_COMMENT',
  POST_TAG: 'POST_TAG',

  COMMENT_REACTION: 'COMMENT_REACTION',
  COMMENT_REPLY: 'COMMENT_REPLY',
  COMMENT_TAG: 'COMMENT_TAG',

  FRIEND_REQUEST: 'FRIEND_REQUEST',
  FRIEND_ACCEPT: 'FRIEND_ACCEPT',

  GROUP_REQUEST: 'GROUP_REQUEST',
  GROUP_ACCEPT: 'GROUP_ACCEPT'
}

module.exports = {
  HOST,
  PORT,
  POST_ATTACHMENT,
  POST_STATUS,
  POST_ACTION,
  POST_TYPE,
  FOLDER_NAME,
  SCOPE,
  FILE_EXT,
  MESSAGE_TYPE,
  FRIEND_STATUS,
  RESPONSE_STATUS,
  MESSAGE_NOTIFY_TYPE,
  MESSAGE_ACTION,

  MEMBER_ROLE,
  MEMBER_STATUS,
  TYPE_SCREEN,
  REACTION_TYPE,
  MEMBER_CONVENTION_STATUS,
  NOTIFY_CONVENTION_STATUS,
  POLL_STATUS,
  POLL_TYPE,
  NOTIFICATION_TYPE,
  SEARCH_TYPE
}
