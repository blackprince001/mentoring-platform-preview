"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useState } from "react"

const defaultSettings = {
  email: {
    messages: true,
    mentions: true,
    assignments: true,
    courseUpdates: true,
  },
  push: {
    messages: true,
    mentions: false,
    assignments: true,
    courseUpdates: false,
  },
}

export function NotificationSettings() {
  const [settings, setSettings] = useState(defaultSettings)

  const updateSettings = () => {
    toast.success("Notification preferences updated!")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>Choose what emails you'd like to receive</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-messages" className="flex flex-col space-y-1">
              <span>Messages</span>
              <span className="font-normal text-sm text-muted-foreground">Receive emails for new messages</span>
            </Label>
            <Switch
              id="email-messages"
              checked={settings.email.messages}
              onCheckedChange={(checked) =>
                setSettings({
                  ...settings,
                  email: { ...settings.email, messages: checked },
                })
              }
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-mentions" className="flex flex-col space-y-1">
              <span>Mentions</span>
              <span className="font-normal text-sm text-muted-foreground">Receive emails when you're mentioned</span>
            </Label>
            <Switch
              id="email-mentions"
              checked={settings.email.mentions}
              onCheckedChange={(checked) =>
                setSettings({
                  ...settings,
                  email: { ...settings.email, mentions: checked },
                })
              }
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-assignments" className="flex flex-col space-y-1">
              <span>Assignments</span>
              <span className="font-normal text-sm text-muted-foreground">Receive emails about assignment updates</span>
            </Label>
            <Switch
              id="email-assignments"
              checked={settings.email.assignments}
              onCheckedChange={(checked) =>
                setSettings({
                  ...settings,
                  email: { ...settings.email, assignments: checked },
                })
              }
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Push Notifications</CardTitle>
          <CardDescription>Configure your mobile push notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="push-messages" className="flex flex-col space-y-1">
              <span>Messages</span>
              <span className="font-normal text-sm text-muted-foreground">
                Receive push notifications for new messages
              </span>
            </Label>
            <Switch
              id="push-messages"
              checked={settings.push.messages}
              onCheckedChange={(checked) =>
                setSettings({
                  ...settings,
                  push: { ...settings.push, messages: checked },
                })
              }
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="push-mentions" className="flex flex-col space-y-1">
              <span>Mentions</span>
              <span className="font-normal text-sm text-muted-foreground">
                Receive push notifications when you're mentioned
              </span>
            </Label>
            <Switch
              id="push-mentions"
              checked={settings.push.mentions}
              onCheckedChange={(checked) =>
                setSettings({
                  ...settings,
                  push: { ...settings.push, mentions: checked },
                })
              }
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="push-assignments" className="flex flex-col space-y-1">
              <span>Assignments</span>
              <span className="font-normal text-sm text-muted-foreground">
                Receive push notifications about assignment updates
              </span>
            </Label>
            <Switch
              id="push-assignments"
              checked={settings.push.assignments}
              onCheckedChange={(checked) =>
                setSettings({
                  ...settings,
                  push: { ...settings.push, assignments: checked },
                })
              }
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={updateSettings}>Save preferences</Button>
      </div>
    </div>
  )
}

