export default {
    data() {
        return {
            dates: '',
        }
    },
    methods: {
        reFormatDate(dates) {
            const weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
            const monthString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            const fullDate = new Date(dates);
            const date = fullDate.getUTCDate();
            const day = weekday[fullDate.getUTCDay()];
            const month = monthString[fullDate.getUTCMonth()];
            const year = fullDate.getUTCFullYear();
            
            return `${day} ${month} ${date} ${year}`;
        },

        reFormatTime(dates) {
            const fullDate = new Date(dates);
            const hour = fullDate.getUTCHours();
            const minute = fullDate.getUTCMinutes();

            return `${hour < 10 ? '0'+hour : hour} : ${minute < 10 ? '0'+minute : minute}`;
        }
    }
};