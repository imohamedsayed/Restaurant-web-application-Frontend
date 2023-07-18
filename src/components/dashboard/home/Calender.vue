<template>
  <div class="container-calendar">
    <div class="calendar">
      <div class="month">
        <i class="fas fa-angle-left prev"></i>
        <div class="date">
          <h1></h1>
          <p></p>
        </div>
        <i class="fas fa-angle-right next"></i>
      </div>
      <div class="weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div class="days"></div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      const date = new Date();

      const renderCalendar = () => {
        date.setDate(1);

        const monthDays = document.querySelector(".days");

        const lastDay = new Date(
          date.getFullYear(),
          date.getMonth() + 1,
          0
        ).getDate();

        const prevLastDay = new Date(
          date.getFullYear(),
          date.getMonth(),
          0
        ).getDate();

        const firstDayIndex = date.getDay();

        const lastDayIndex = new Date(
          date.getFullYear(),
          date.getMonth() + 1,
          0
        ).getDay();

        const nextDays = 7 - lastDayIndex - 1;

        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        document.querySelector(".date h1").innerHTML = months[date.getMonth()];

        document.querySelector(".date p").innerHTML = new Date().toDateString();

        let days = "";

        for (let x = firstDayIndex; x > 0; x--) {
          days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
        }

        for (let i = 1; i <= lastDay; i++) {
          if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
          ) {
            days += `<div class="today">${i}</div>`;
          } else {
            days += `<div>${i}</div>`;
          }
        }

        for (let j = 1; j <= nextDays; j++) {
          days += `<div class="next-date">${j}</div>`;
          monthDays.innerHTML = days;
        }
      };

      document.querySelector(".prev").addEventListener("click", () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
      });

      document.querySelector(".next").addEventListener("click", () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
      });

      renderCalendar();
    });
  },
};
</script>

<style lang="scss" scoped>
.container-calendar {
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .calendar {
    width: 500px;
    box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, 0.1);
    border-radius: 20px;

    .month {
      width: 100%;
      height: 5rem;
      background-color: var(--dark-orange);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
      text-align: center;
      text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
      padding-top: 20px;
      i {
        font-size: 1rem;
        cursor: pointer;
      }
      h1 {
        font-size: 1.4rem;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1rem;
      }
    }
    .weekdays {
      width: 80%;
      height: 1rem;
      padding: 0 0.4rem;
      display: flex;
      align-items: center;
      margin-left: 35px;
      margin-top: 20px;

      div {
        font-size: 1rem;
        font-weight: 900;
        letter-spacing: 0.1rem;
        width: calc(48.2rem / 5);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--text-black-900);
      }
    }
    .days {
      width: 80%;
      display: flex;
      flex-wrap: wrap;
      padding: 0.2rem;
      margin: 0 auto;
      color: var(--text-black-900);

      div {
        font-size: 1.3rem;
        margin: 0.3rem;
        width: calc(24.2rem / 9);
        height: 2.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.2s;
        &:hover:not(.today) {
          background-color: #bae12d;
          border: 0.02rem solid #777;
          cursor: pointer;
        }

        &.prev-date,
        &.next-date {
          opacity: 0.5;
        }
      }
    }
  }
}
</style>
