  <div>
    <div>
      <b-list-group>
        <b-list-group-item>雷射加工</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Morbi leo risus</b-list-group-item>
        <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>
      </b-list-group>
      <b-jumbotron header="雷射加工" lead="機台: x546-148">
        加工狀態
        <svg fixed="mid" height="100" width="100" class="stateButton">
          <circle cx="22" cy="22" r="19" stroke="black" stroke-width="3" fill="red" />
        </svg>
        <!-- <b-button variant="primary" href="#">More Info</b-button> -->
      </b-jumbotron>
    </div>
    <!-- <div class="laserTitle">雷射加工</div>
    <div class="state">加工狀態
      <svg height="100" width="100" class="stateButton">
        <circle cx="22" cy="22" r="19" stroke="black" stroke-width="3" fill="red" />
      </svg>
    </div> -->
    <!-- <LaserChart /> -->
    <div>
      <label for="example-datepicker">Choose a date</label>
      <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
      <p>Value: '{{ value }}'</p>
    </div>
    <div>
      <b-form-timepicker v-model="value" locale="en"></b-form-timepicker>
      <div class="mt-2">Value: '{{ value }}'</div>
    </div>
    <!-- <div class="z_position">
      z軸位置
      <input class="z_position_input">
    </div> -->
  </div>