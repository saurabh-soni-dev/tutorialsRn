import React, { FC } from 'react'
import { Image, ScrollView, StatusBar, View } from 'react-native';
import style from './dragAndSwapImageList.style';
import ImageDraggable from '../../components/imageDraggable/ImageDraggable';
import dragAndSwapImageListController from './dragAndSwapImageList.controller';
import color from '../../theme/color';

const DragAndSwapImageList: FC = () => {
    const {
        movingDraggable,
        items,
        onMovingDraggable,
        releaseDraggable,
        onReleaseDraggable,
        swap
    } = dragAndSwapImageListController()

    return (
        <View style={[style.container]}>
            <StatusBar animated backgroundColor={color.Primary} barStyle={'default'} />
            <ScrollView
                scrollEnabled={!movingDraggable}
                showsVerticalScrollIndicator={false}
                alwaysBounceVertical={false}
                contentContainerStyle={style.homeScrollView}>
                <View style={style.gridRootContainer}>
                    <View style={style.gridListContainer}>
                        {items.map((item: any, index: number) => {
                            return (
                                <ImageDraggable
                                    key={index}
                                    index={index}
                                    movingDraggable={movingDraggable}
                                    onMovingDraggable={onMovingDraggable}
                                    releaseDraggable={releaseDraggable}
                                    onReleaseDraggable={onReleaseDraggable}
                                    swap={swap}
                                    renderChild={isMovedOver => {
                                        console.log("isMovedOver:", isMovedOver)
                                        return (
                                            <View
                                                style={{
                                                    ...style.gridListItem,
                                                    ...(isMovedOver && style.gridListItemMovedOver),
                                                    ...style.shadow,
                                                }}>
                                                <Image source={{ uri: item }} style={style.imageCover} />
                                            </View>
                                        );
                                    }}
                                />
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default DragAndSwapImageList