import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import MarketReadUI from "./Market-read.presenter";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./Market-read.queries";

export default function MarketRead() {
  const router = useRouter();

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.read },
  });

  function onClickList() {
    router.push("/markets/list");
  }

  function onClickMoveEdit() {
    router.push(`/markets/detail/${router.query.read}/edit`);
  }

  function onClickPick() {
    toggleUseditemPick({
      variables: { useditemId: router.query.read },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query.read },
        },
      ],
    });
    console.log(data);
  }

  async function onClickDelete() {
    await deleteUseditem({
      variables: { useditemId: router.query.read },
    });
    alert("게시물이 삭제되었습니다");
    router.push("/markets/list");
  }

  return (
    <MarketReadUI
      data={data}
      onClickList={onClickList}
      onClickMoveEdit={onClickMoveEdit}
      onClickDelete={onClickDelete}
      onClickPick={onClickPick}
    />
  );
}
