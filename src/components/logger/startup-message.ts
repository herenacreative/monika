import boxen from 'boxen'
import chalk from 'chalk'
import type { Config } from '../../interfaces/config'
import type { Notification } from '../../interfaces/notification'
import type { Probe, ProbeAlert } from '../../interfaces/probe'
import type { RequestConfig } from '../../interfaces/request'

type GenerateStartupMessageParams = {
  config: Config
  isFirstRun: boolean
  isVerbose: boolean
  isSymonMode: boolean
}

export function generateStartupMessage({
  config,
  isFirstRun,
  isVerbose,
  isSymonMode,
}: GenerateStartupMessageParams): string {
  if (isSymonMode) {
    return 'Running in Symon mode'
  }

  const { notifications = [], probes } = config
  const notificationTotal = notifications.length
  const probeTotal = probes.length
  const hasNotification = notificationTotal > 0

  let startupMessage = ''

  // warn if config is empty
  if (!hasNotification) {
    startupMessage += generateEmptyNotificationMessage()
  }

  startupMessage += generateConfigInfoMessage({
    isFirstRun,
    notificationTotal,
    probeTotal,
  })

  if (isVerbose) {
    startupMessage += generateProbeMessage(probes)
    startupMessage += generateNotificationMessage(notifications || [])
  }

  return startupMessage
}

function generateEmptyNotificationMessage(): string {
  const NO_NOTIFICATIONS_MESSAGE = `Notifications has not been set. We will not be able to notify you when an INCIDENT occurs!
  Please refer to the Monika documentations on how to how to configure notifications (e.g., Telegram, Slack, Desktop notification, etc.) at https://monika.hyperjump.tech/guides/notifications.`

  return boxen(chalk.yellow(NO_NOTIFICATIONS_MESSAGE), {
    padding: 1,
    margin: {
      top: 2,
      right: 1,
      bottom: 2,
      left: 1,
    },
    borderStyle: 'bold',
    borderColor: 'yellow',
  })
}

type GenerateConfigInfoMessageParams = {
  isFirstRun: boolean
  notificationTotal: number
  probeTotal: number
}

function generateConfigInfoMessage({
  isFirstRun,
  notificationTotal,
  probeTotal,
}: GenerateConfigInfoMessageParams) {
  return `${
    isFirstRun ? 'Starting' : 'Restarting'
  } Monika. Probes: ${probeTotal}. Notifications: ${notificationTotal}\n\n`
}

function generateProbeMessage(probes: Probe[]): string {
  let startupMessage = 'Probes:\n'

  for (const probe of probes) {
    const { alerts, description, id, interval, name, requests } = probe

    startupMessage += `- Probe ID: ${id}
Name: ${name}
Description: ${description || '-'}
Interval: ${interval}
`
    startupMessage += `    Requests:\n`
    startupMessage += generateProbeRequestMessage(requests)
    startupMessage += generateAlertMessage(alerts)
  }

  return startupMessage
}

function generateProbeRequestMessage(requests: RequestConfig[]): string {
  let startupMessage = ''

  for (const request of requests) {
    const { body, headers, method, url } = request

    startupMessage += `      - Request Method: ${method || `GET`}
  Request URL: ${url}
  Request Headers: ${JSON.stringify(headers) || `-`}
  Request Body: ${JSON.stringify(body) || `-`}
`
  }

  return startupMessage
}

function generateAlertMessage(alerts: ProbeAlert[]): string {
  const hasAlert = alerts.length > 0
  const defaultAlertsInString =
    '[{ "assertion": "response.status < 200 or response.status > 299", "message": "HTTP Status is not 200"}, { "assertion": "response.time > 2000", "message": "Response time is more than 2000ms" }]'
  const alertsInString = JSON.stringify(alerts)

  return `    Alerts: ${hasAlert ? alertsInString : defaultAlertsInString}\n`
}

function generateNotificationMessage(notifications: Notification[]): string {
  const hasNotification = notifications.length > 0

  if (!hasNotification) {
    return ''
  }

  let startupMessage = `\nNotifications:\n`

  for (const notification of notifications) {
    const { data, id, type } = notification

    startupMessage += `- Notification ID: ${id}
Type: ${type}
`
    // Only show recipients if type is mailgun, smtp, or sendgrid
    // check one-by-one instead of using indexOf to avoid using type assertion
    if (type === 'mailgun' || type === 'smtp' || type === 'sendgrid') {
      startupMessage += `    Recipients: ${data.recipients.join(', ')}\n`
    }

    switch (type) {
      case 'smtp':
        startupMessage += `    Hostname: ${data.hostname}
Port: ${data.port}
Username: ${data.username}
`
        break
      case 'mailgun':
        startupMessage += `    Domain: ${data.domain}\n`
        break
      case 'sendgrid':
        break
      case 'webhook':
      case 'slack':
      case 'lark':
      case 'google-chat':
        startupMessage += `    URL: ${data.url}\n`
        break
    }
  }

  return startupMessage
}
