<template>
  <p id="Top">Federated Learning</p>
  <el-container>
    <el-aside width="200px">
      <div class="left">Options</div>
      <div class="select">
        <p style="margin-left: 10px">Data Set</p>
        <el-select v-model="value1" placeholder="Select" style="width: 200px">
          <el-option
            v-for="item in dataset"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <p style="margin-left: 10px">Model</p>
        <el-select v-model="value2" placeholder="Select" style="width: 200px">
          <el-option
            v-for="item in model"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <p style="margin-left: 10px">Algorithm</p>
        <el-select v-model="value3" placeholder="Select" style="width: 200px">
          <el-option
            v-for="item in algorithm"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div id="options_select">
        <el-button class="button" type="primary" v-on:click="confirm"
          >Confirm</el-button
        >
      </div>
    </el-aside>
    <el-main>
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>Topology</span>
            <el-button class="button" type="primary" v-on:click="test"
              >Operation button</el-button
            >
          </div>
        </template>
        <el-row>
          <NetworkGraph :edges="edges" :nodes="nodes" />
          <div id="Info">显示终端个数和终端类型</div>
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
        { from: "node1", to: "node4" },
      ],
      dataset: [
        {
          value: "MNIST",
          label: "MNIST",
        },
        {
          value: "Synthetic",
          label: "Synthetic",
        },
      ],
      model: [
        {
          value: "DNN",
          label: "DNN",
        },
        {
          value: "CNN",
          label: "CNN",
        },
      ],
      algorithm: [
        {
          value: "FedAvg",
          label: "FedAvg",
        },
        {
          value: "PADP-Fed",
          label: "PADP-Fed",
        },
      ],
      value1: ref(""),
      value2: ref(""),
      value3: ref(""),
    };
  },
  mounted() {},
  methods: {
    test() {
      console.log("test");
      console.log(this.nodes);
      console.log(this.edges);
    },
    confirm() {
      console.log(this.value1, this.value2, this.value3);
    },
  },
};
</script>
<style scoped>
#Top {
  color: azure;
  font-size: 50px;
  margin-left: 0;
  padding: 0%;
  background-color: #323232e7;
  margin-block-start: 0%;
  margin-block-end: 0%;
  border-radius: 0px;
}
.el-header {
  padding: 0%;
}
.el-main {
  height: 800px;
  background-color: #1e1e1e;
  padding: 0%;
}
.el-aside {
  width: 250px;
  background-color: #252526ee;
  color: azure;
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
#options_select {
  margin-top: 20px;
}
</style>
