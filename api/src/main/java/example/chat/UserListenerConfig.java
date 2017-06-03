package example.chat;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;

@Configuration
class UserListenerConfig {
  @Bean
  public DisconnectionWatcher disconnectionWatcher(UserListService userList, SimpMessagingTemplate messagingTemplate) {
    return new DisconnectionWatcher(userList, messagingTemplate);
  }
}
