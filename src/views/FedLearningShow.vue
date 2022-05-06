<template>
  <p id="Top">Federated Learning</p>
  <el-aside>
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
    <div class="show">
      <NetworkGraph :edges="edges" :nodes="nodes" />
    </div>
  </el-main>
  <div class="clientInfo">
    <div class="content">
      <div id="results">Results</div>
      <div id="clientnum">{{ "client number: " + num }}</div>
      <div id="clienttype">{{ "clinet type: " + type }}</div>
      <div id="accuracy">{{ "Accuracy: " + acc + "%" }}</div>
      <div id="loss">{{ "Loss: " + loss + "%" }}</div>
    </div>
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
      num: 4,
      type: "Raspberry",
      acc: "xx",
      loss: "xx",
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
  margin: 0%;
  background-color: #323232e7;
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 58px;
}
.el-main {
  height: 800px;
  background-color: #1e1e1e;
  padding: 0%;
  position: absolute;
  top: 58px;
  left: 16%;
  width: 68%;
  height: 100%;
}
.el-aside {
  width: 16%;
  background-color: #252526ee;
  color: azure;
  position: absolute;
  left: 0%;
  height: 100%;
  top: 58px;
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
#options_select {
  margin-top: 20px;
}
.clientInfo {
  text-align: left;
  color: azure;
  font-size: 20px;
  height: 100%;
  position: absolute;
  top: 58px;
  width: 16%;
  right: 0%;
  background-color: #252526ee;
}
.el-card_header {
  background-color: aqua;
}
#Graph {
  margin-left: 200px;
}
#results {
  position: absolute;
  top: 20px;
  left: 20%;
  font-size: 40px;
}
#clientnum {
  position: absolute;
  top: 10%;
  left: 20%;
}
#clienttype {
  position: absolute;
  top: 15%;
  left: 20%;
}
#accuracy {
  position: absolute;
  top: 20%;
  text-align: center;
  left: 20%;
}
#loss {
  position: absolute;
  top: 25%;
  text-align: center;
  left: 20%;
}
.content{
  font-size: 20px;
}
</style>
