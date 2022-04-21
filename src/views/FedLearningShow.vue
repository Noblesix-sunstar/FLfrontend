<template>
  <div class="show">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="top"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <div class="Top">XXXXX</div>
        </el-menu>
      </el-header>
      <el-container>
        <el-container>
          <el-aside width="200px">
            <div class="left">XXX</div>
            <div style="display: inline-block">
              <p style="margin-left: 10px">Data Set</p>
              <el-select
                v-model="value"
                multiple
                placeholder="Select"
                style="width: 240px"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div style="display: inline-block">
              <p style="margin-left: 10px">Model</p>
              <el-select
                v-model="value"
                multiple
                placeholder="Select"
                style="width: 240px"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div style="display: inline-block">
              <p style="margin-left: 10px">Algorithm</p>
              <el-select
                v-model="value"
                multiple
                placeholder="Select"
                style="width: 240px"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </el-aside>
          <el-main>
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span>XXX</span>
                  <el-button class="button" type="primary" v-on:click="test"
                    >Operation button</el-button
                  >
                </div>
              </template>
              <el-row>
                <NetworkGraph :edges="edges" :nodes="nodes" />
                <div id="Info">Information</div>
              </el-row>
            </el-card>
            <el-footer>
              <el-card class="foot">
                <div class="results">
                  <el-row>
                    <div>Accuracy</div>
                    <el-divider direction="vertical" border-style="double" />
                    <div>Loss</div>
                  </el-row>
                </div>
              </el-card>
            </el-footer>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NetworkGraph from "../components/NetworkGraph.vue";
import { ref } from "vue";

export default {
  name: "app",
  components: {
    NetworkGraph,
  },
  data() {
    return {
      nodes: [
        { id: "node1", label: "Node 1" },
        { id: "node2", label: "Node 2" },
        { id: "node3", label: "Node 3" },
        { id: "node4", label: "Node 4" },
      ],
      edges: [
        { from: "node2", to: "node1" },
        { from: "node1", to: "node3" },
      ],
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      value: ref(""),
    };
  },
  mounted() {},
  methods: {
    test() {
      console.log("test");
      console.log(this.nodes);
      console.log(this.edges);
      console.log(this.value);
    },
  },
};
</script>
<style scoped>
.Top {
  color: azure;
  font-size: 50px;
  margin-left: 20px;
}
.el-header {
  padding: 0%;
}
.el-main {
  height: 800px;
  background-color: rgb(241, 233, 206);
  padding: 0%;
}
.el-aside {
  width: 250px;
  background-color: rgb(206, 227, 247);
}
.el-footer {
  padding: 0%;
}
.left {
  height: 50px;
  margin-top: 20px;
  font-size: 40px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 800px;
  height: 500px;
  margin: 50px;
}
.foot {
  width: 800px;
  margin: 50px;
}
.results {
  margin-left: 40%;
}
#Info {
  width: 200px;
  line-height: 400px;
}
</style>
