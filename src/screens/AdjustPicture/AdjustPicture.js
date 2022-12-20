import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login, TYPES } from '@/actions/UserActions';
import { Button, ErrorView, TextField } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/AdjustPicture/AdjustPicture.styles.js';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';

import { navigationRef } from '@/navigation/RootNavigation';
import { NAVIGATION } from '@/constants';
import { AuthHeader } from '@/components/AuthHeader';

export function AdjustPicture() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <AuthHeader />
      </View>

      <ErrorView errors={errors} />
      <View style={styles.pictureView}>
        <View style={styles.header}>
          <Text style={styles.headingText}>
            {strings.addYourProfilePicture.adjustPicture}
          </Text>
        </View>
        <View style={styles.mainView}></View>
      </View>
      <View style={styles.bottomButtons}>
        <Button
          title={
            isLoading
              ? strings.common.loading
              : strings.addYourProfilePicture.cropAndClose
          }
        />
        <Button
          style={styles.skipButton}
          textStyle={styles.skipButtonText}
          title={
            isLoading
              ? strings.common.loading
              : strings.addYourProfilePicture.replace
          }
        />
      </View>
    </View>
  );
}
