using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SP.Model.WS.Event.EventSpeaker2Session
{
    public class WSEventSpeakerSessionDetail
    {
        public Guid? EventSessionId { get; set; }

        public Guid EventSpeakerId { get; set; }

        public string SessionName { get; set; }

        public string LocationName { get; set; }
    }
}
