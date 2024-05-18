export const getGreetingData = (tgWebApp, current) => {
    const data = tgWebApp.initDataUnsafe;
    const name = data?.user?.first_name || "User"

    let dayTime = "evening";
    const lastUpdated = current?.last_updated;
    if (!lastUpdated) return [dayTime, name];
    const time =  +lastUpdated?.split(" ")[1].split(":")[0];

    if (time >= 6 && time < 12) {
        dayTime = "morning";
    } else if (time >= 12 && time < 18) {
        dayTime = "afternoon";
    } else if (time >= 18 && time < 22) {
        dayTime = "evening";
    } else {
        dayTime = "night";
    }

    return [dayTime, name];
}