const shards = 2;
for(let i = 1; i <= shards; i++) {
  sh.addShard(`replset-${i}/mongo-shardsvr-${i}:27018`)
}
