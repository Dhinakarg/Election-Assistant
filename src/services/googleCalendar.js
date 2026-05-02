export const addElectionEventToCalendar = async (accessToken, eventDetails) => {
  if (!accessToken) return { success: false, error: 'No access token provided.' };

  const event = {
    summary: `🗳️ ${eventDetails.title}`,
    description: eventDetails.description || 'Important election event reminder.',
    start: {
      date: eventDetails.date,
    },
    end: {
      date: eventDetails.date,
    },
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 1440 },
        { method: "popup", minutes: 60 },
      ],
    },
  };

  try {
    const response = await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errData = await response.json();
      return { success: false, error: "We couldn't add the event. Please check your calendar permissions and try again." };
    }
  } catch (error) {
    return { success: false, error: "An unexpected issue occurred while updating your calendar. Please try again later." };
  }
};
