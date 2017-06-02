package example.chat;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;

@Controller
public class ChatRoomController {
    @Autowired UserListService userList;

    @MessageMapping("/chat")
    @SendTo("/topic/messages")
    public Message chat(Message message, StompHeaderAccessor accessor) throws Exception {
        String sessionId = accessor.getSessionId();
        String senderName = userList.getUserName(sessionId);
        message.setSenderName(senderName);
        return message;
    }

}
