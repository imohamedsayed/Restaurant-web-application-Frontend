<template>
  <div class="performance">
    <div class="p-header d-flex justify-content-between w-100">
      <p>Satisfaction</p>
      <a href="/projects">See all</a>
    </div>
    <div class="performance-details">
      <div class="containerP">
        <div class="circular-progress">
          <span class="progress-value">0%</span>
        </div>
        <span class="text"
          ><i class="fa-solid fa-user me-3"></i>Customer Satisfaction</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      let progressStartValue = 0,
        progressEndValue = 40,
        speed = 100;
      let circularProgress = document.querySelector(".circular-progress"),
        progressValue = document.querySelector(".progress-value");

      let progress = setInterval(() => {
        if (progressEndValue == 0) {
          clearInterval(progress);
        } else {
          progressStartValue++;
          progressValue.textContent = `${progressStartValue}%`;
          circularProgress.style.background = `conic-gradient(#fa942a ${
            progressStartValue * 3.6
          }deg, #ededed 0deg)`;

          if (progressStartValue == progressEndValue) {
            clearInterval(progress);
          }
        }
      }, speed);
    });
  },
};
</script>

<style lang="scss" scoped>
.performance {
  background: var(--bg-black-50);
  padding: 20px;
  height: 390px;
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.02);
  }
  a {
    text-decoration: none;
  }
  p {
    font-weight: 700;
    color: var(--text-black-900);
  }
  .date {
    margin-top: 100px;
  }
  .containerP {
    display: flex;
    border-radius: 8px;
    background: var(--bg-black-50);
    row-gap: 30px;
    flex-direction: column;
    align-items: center;
  }
  .circular-progress {
    position: relative;
    height: 130px;
    width: 130px;
    border-radius: 50%;
    background: conic-gradient(#fecd03 3.6deg, #fecd03 0deg);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .circular-progress::before {
    content: "";
    position: absolute;
    height: 110px;
    width: 110px;
    border-radius: 50%;
    background-color: #fff;
  }

  .progress-value {
    position: relative;
    font-size: 40px;
    font-weight: 600;
    color: var(--light-orange);
  }

  .text {
    font-size: 20px;
    font-weight: 500;
    color: #606060;
  }
}
</style>
