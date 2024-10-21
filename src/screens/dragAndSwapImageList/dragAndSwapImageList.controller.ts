import {
  IDraggablePosition, dragAndSwapImageListControllerProps,
} from './dragAndSwapImageList.interface';
import {useEffect, useState} from 'react';
import {images} from './dragAndSwapImageList.const';

const dragAndSwapImageListController = (): dragAndSwapImageListControllerProps => {
  const [movingDraggable, setMovingDraggable] =
    useState<IDraggablePosition>(null);
  const [releaseDraggable, setReleaseDraggable] =
    useState<IDraggablePosition>(null);
  const [items, setItems] = useState<string[]>(images);

  useEffect(() => {
    setMovingDraggable(null);
    setReleaseDraggable(null);
    return () => {};
  }, [JSON.stringify(items)]);

  const degToRad = (deg: number) => {
    return (deg * Math.PI) / 180;
  };

  const onMovingDraggable = (movingDraggableP: IDraggablePosition) => {
    setMovingDraggable(movingDraggableP);
  };

  const onReleaseDraggable = (releaseDraggableP: IDraggablePosition) => {
    setMovingDraggable(null);
    setReleaseDraggable(releaseDraggableP);
  };

  const swap = (index1: number, index2: number) => {
    var arr = [...items];
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    setItems(arr);
  };

  console.log("swap:", items)

  return {
    movingDraggable,
    setMovingDraggable,
    releaseDraggable,
    setReleaseDraggable,
    items,
    setItems,
    degToRad,
    onMovingDraggable,
    onReleaseDraggable,
    swap,
  };
};

export default dragAndSwapImageListController;
