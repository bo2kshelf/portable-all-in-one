## Usage

```shell
docker-compose up -d
```

Docker 公式イメージで配布される`mongos`は docker-entrypoint-initdb.d 内のスクリプトを実行しないので，次のコードを手動で実行して下さい.

```shell
docker-compose exec mongos mongo

# mongo shellの中で
sh.addShard(`replset-1/mongo-shardsvr-1:27018`)
sh.addShard(`replset-2/mongo-shardsvr-2:27018`)

# 適当にtestの部分は変更して下さい / 適切なdumpがあれば復元できる可能性あり
sh.enableSharding("test")
sh.shardCollection("test.books", {"_id": 1})
sh.shardCollection("test.authors", {"_id": 1})
sh.shardCollection("test.series", {"_id": 1})
```
